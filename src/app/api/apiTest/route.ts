export async function GET(request: Request) {
  console.log('GET /api/test')

  try {
    // 로컬 서버에서 제품 데이터를 가져옴
    const res = await fetch('http://localhost:4000/products', {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`)
    }

    const data = await res.json()
    // 데이터가 성공적으로 페칭되면 JSON 응답으로 반환
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Failed to fetch products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export async function POST(request: Request) {
  console.log('POST /api/test')

  try {
    const requestBody = await request.json()
    console.log('Received data:', requestBody)

    // 여기서 데이터를 처리 (예: 데이터베이스에 저장)
    return new Response(JSON.stringify({ message: 'Data successfully received', data: requestBody }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Failed to process POST request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export async function PUT(request: Request) {
  console.log('PUT /api/test')

  try {
    const requestBody = await request.json()
    console.log('Update data:', requestBody)

    // 데이터를 업데이트하는 로직을 추가
    return new Response(JSON.stringify({ message: 'Data successfully updated', data: requestBody }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Failed to process PUT request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export async function DELETE(request: Request) {
  console.log('DELETE /api/test')

  try {
    const requestUrl = new URL(request.url)
    const id = requestUrl.searchParams.get('id')

    if (!id) {
      return new Response(JSON.stringify({ message: 'ID is required to delete' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    // 여기서 데이터를 삭제하는 로직을 추가
    console.log(`Deleting item with ID: ${id}`)

    return new Response(JSON.stringify({ message: `Item with ID ${id} successfully deleted` }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Failed to process DELETE request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export async function PATCH(request: Request) {
  console.log('PATCH /api/test')

  try {
    const requestBody = await request.json()
    console.log('Patch data:', requestBody)

    // 여기서 일부 데이터를 업데이트하는 로직을 추가
    return new Response(JSON.stringify({ message: 'Data successfully patched', data: requestBody }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Failed to process PATCH request' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

// export async function GET(request: Request) {
//   console.log('GET /api/test')
//   const res = await fetch('http://localhost:4000/products', {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   const data = await res.json()
//   return Response.json({ data })
// }

// export async function POST(request: Request) {
//   console.log('POST /api/test')
// }

// export async function PUT(request: Request) {
//   console.log('PUT /api/test')
// }

// export async function DELETE(request: Request) {
//   console.log('DELETE /api/test')
// }

// export async function PATCH(request: Request) {
//   console.log('PATCH /api/test')
// }
