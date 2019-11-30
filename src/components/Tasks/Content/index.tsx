import * as React from 'react'
import { AppState } from 'store'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { ITaskState } from 'store/tasks/types'
import TaskWrapper from 'components/Common/TaskWrapper'
import ContentTitle from 'components/Tasks/Content/ContentTitle'
import {
  filtratedTasksBacklog,
  filtratedTasksTodo
} from 'store/tasks/selectors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: #fafafa;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`
const Tasks = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

interface IContentProps {
  backlog: () => ITaskState[]
  todo: () => ITaskState[]
}

const Content: React.FC<IContentProps> = props => {
  return (
    <Wrapper>
      <ContentTitle />
      <Tasks>
        <TaskWrapper data={props.backlog} type='backlog' />
        <TaskWrapper data={props.todo} type='todo' />
      </Tasks>
    </Wrapper>
  )
}

const mapStateToProps = (state: AppState) => ({
  backlog: filtratedTasksBacklog(state),
  todo: filtratedTasksTodo(state)
})

export default connect(mapStateToProps)(Content)