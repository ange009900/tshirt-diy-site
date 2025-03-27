
import React, { useEffect, useRef } from 'react'
import { fabric } from 'fabric'

export default function Design() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: 300,
      height: 400,
      backgroundColor: '#f3f3f3',
    })
    canvasRef.current = canvas

    const shirtText = new fabric.Text('亏点就亏点吧~', {
      top: 50,
      left: 40,
      fontSize: 20,
      fill: '#e63946',
    })
    canvas.add(shirtText)
  }, [])

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4 font-semibold">DIY你的情绪T恤</h2>
      <canvas id="canvas" className="border shadow mx-auto" />
    </div>
  )
}
