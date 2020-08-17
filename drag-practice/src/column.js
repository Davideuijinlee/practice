import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
    margin: 9px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    
    display: flex;
    flex-direction: column;
    `;
const Title = styled.h3`
    padding: 8px;
    `;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};

    display: flex;
    `;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable 
                    droppableId={this.props.column.id} 
                    type={this.props.column.id === 'column-3' ? 'done' : 'active'}
                    // isDropDisabled={this.props.isDropDisabled}
                    // direction="vertical" (default)
                    direction="horizontal"
                >
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef} 
                            {...provided.droppableProps}
                            isDraggingOver = {snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}