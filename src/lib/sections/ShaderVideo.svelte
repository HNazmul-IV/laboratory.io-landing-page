<script lang="ts">
  import {onMount} from 'svelte'
  import {defaultVertSrc, defaultFragSrc} from './shaders'
  import * as wglu from './webgl-utils'
  export let fragSrc = defaultFragSrc
  export let width = 192*10
  export let height = 108*10
  let parent
  let canvas:HTMLCanvasElement
  onMount(()=>{
    const gl = canvas.getContext('webgl2', {alpha:false, depth: false, antialias:false})
    gl.clearColor(0.0, 0.0, 1.0, 1.0)
    
    const vs = wglu.compileShader(gl, defaultVertSrc, gl.VERTEX_SHADER)
    const fs = wglu.compileShader(gl, fragSrc, gl.FRAGMENT_SHADER)
    const program = wglu.createProgram(gl, vs, fs)
    const laPosition = gl.getAttribLocation(program, 'aPosition')
    const laTexCoord = gl.getAttribLocation(program, 'aTexCoord')  
    const liResolution = gl.getUniformLocation(program, 'iResolution')
    const liTime = gl.getUniformLocation(program, 'iTime')
    const positionBuffer = gl.createBuffer()
    const texCoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const start = Date.now()  
    draw()
    function draw() {
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.uniform3f(liResolution, width, height,1)
      gl.uniform1f(liTime, (Date.now()-start) / 1000)
      gl.enableVertexAttribArray(laPosition)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(laPosition, 2, gl.FLOAT, false, 0, 0)

      gl.enableVertexAttribArray(laTexCoord)
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
      gl.vertexAttribPointer(laTexCoord, 2, gl.FLOAT, false, 0, 0)

      gl.viewport(0,0,width,height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      requestAnimationFrame(draw)
    }    
  })
</script> 
<canvas bind:this={canvas} width={width} height={height} style="width:100%"/>