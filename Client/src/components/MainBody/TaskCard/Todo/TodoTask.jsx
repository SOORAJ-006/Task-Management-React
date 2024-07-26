import React from 'react'
import { Card } from 'react-bootstrap'
import '../TaskCardStyle.css'

const TodoTask = ({todoLength}) => {
  return (
    <Card className='shadow' style={{ width: '22rem' , height: '10rem' , border: 'none' }}>
      <Card.Body>
        <Card.Title className='text-muted'>TODO</Card.Title>
        <Card.Subtitle className="mb-2 d-flex justify-content-between align-items-center">
            <h3>{todoLength ? todoLength : 0}</h3>
            <div className='card_bg text-white rounded-5 bg-danger d-flex justify-content-center align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
              </svg>
            </div>
        </Card.Subtitle>
        
        <Card.Text className='text-muted'>111 Last Month</Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default TodoTask