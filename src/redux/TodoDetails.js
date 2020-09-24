import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import TodoList from '../components/TodoList';

import { useDispatch } from 'react-redux';
import { editTodo } from './actions';

export default function TodoDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const fetchDetails = useCallback(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/todos/${params.id}`)
      .then((response)=>{
        setData(response.data);
      })
      .catch(setError)
      .finally(()=>setLoading(false));
  }, [params.id]);

  useEffect(()=>{
    fetchDetails();
  }, [params, fetchDetails]);

  if(loading)return (
    <h1>Loading...</h1>
  );

  if(error) return (
    <h1 className="text-danger">
      Error: {error.message}
    </h1>
  );
  const handleChangeStatus = ()=>{
    dispatch(editTodo({
      ...data,
      status: !data.status,
      updatedAt: new Date().toJSON(),
    }, fetchDetails));
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Card className="my-5">
              <CardBody>
                <h4>{data.title}</h4>
                <p>
                  created at:{" "}
                  {new Date(data.createdAt).toLocaleString()}
                </p>
                <p>
                  updated at:{" "}
                  {new Date(data.updatedAt).toLocaleString()}
                </p>
                <Button 
                  onClick={handleChangeStatus}
                  color={data.status ? "success" : "warning"} 
                  block
                >
                  Status: {data.status ? "Completed" : "On progress"}
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <TodoList/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
