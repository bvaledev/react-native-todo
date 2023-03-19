import React, { useState } from 'react'
import { FlatList, View } from "react-native";

import { styles } from './styles'
import { Header } from "../../components/Header";

import { Form } from "../../components/Form";
import { TasksStatus } from '../../components/TasksStatus'
import { EmptyList } from "../../components/EmptyList";
import { TaskItem } from "../../components/TaskItem";
import { Todo } from '../../models/todo';

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const totalCreated = todos.length
  const completedTodos = todos.filter((todo) => todo.isCompleted).length

  function handleAddTodo(title: string) {
    const timestampInSeconds = Math.floor(Date.now() / 1000)
    const newTodo: Todo = {
      id: `x-${timestampInSeconds}`,
      title,
      isCompleted: false
    }
    setTodos((prevState) => [...prevState, newTodo])
  }

  function handleStatusUpdate(id: string){
    setTodos((prevState) => prevState.map((todo) => {
      if(todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo
    }))
  }

  function handleRemove(id: string){
    setTodos((prevState) => prevState.filter((todo) => todo.id != id))
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Form onAdd={handleAddTodo} />
        <TasksStatus created={totalCreated} completed={completedTodos} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (<TaskItem todo={item} onUpdate={handleStatusUpdate} onRemove={handleRemove} />)}
          keyExtractor={({ id }) => id}
          ListEmptyComponent={<EmptyList />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}
