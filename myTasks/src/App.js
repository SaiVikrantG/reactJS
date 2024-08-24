import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Tasks from './components/Tasks'

import {
  MainContainer,
  TaskInputContainer,
  TaskDisplayContainer,
  Heading,
  InputContainer,
  LabelText,
  Input,
  Select,
  AddButton,
  TagsHeading,
  TagsContainer,
  TasksContainer,
  TagsButton,
  TagListItem,
  NoTaskText,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    myTaskList: [],
    inputTask: '',
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onClickAddButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = uuid()
    const bgColor = false

    if (taskName.length !== 0) {
      this.setState(prevState => ({
        myTaskList: [
          ...prevState.myTaskList,
          {id, taskName, taskCategory, bgColor},
        ],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onChangeInputTask = event => {
    this.setState({inputTask: event.target.value})
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {myTaskList, inputTask, selectTag, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => each.taskCategory === activeTag)

    return (
      <MainContainer>
        <TaskInputContainer>
          <Heading>Create a Task!</Heading>
          <InputContainer>
            <LabelText for="textInput">Task</LabelText>
            <Input
              id="textInput"
              type="text"
              placeholder="Enter the task here"
              value={inputTask}
              onChange={this.onChangeInputTask}
            />
            <LabelText for="optionInput">Tags</LabelText>
            <Select
              id="optionInput"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId}>{eachTag.displayText}</option>
              ))}
            </Select>
          </InputContainer>
          <AddButton type="button" onClick={this.onClickAddButton}>
            Add Task
          </AddButton>
        </TaskInputContainer>
        <TaskDisplayContainer>
          <TagsHeading>Tags</TagsHeading>
          <TagsContainer>
            {tagsList.map(eachTag => {
              const isActive = activeTag === eachTag.optionId
              return (
                <TagListItem key={eachTag.optionId}>
                  <TagsButton
                    type="button"
                    value={eachTag.optionId}
                    onClick={this.onClickTag}
                    isActive={isActive}
                  >
                    {eachTag.displayText}
                  </TagsButton>
                </TagListItem>
              )
            })}
          </TagsContainer>
          <TagsHeading>Tasks</TagsHeading>
          <TasksContainer>
            {filterTaskList.length === 0 ? (
              <NoTaskText>No Tasks Added Yet</NoTaskText>
            ) : (
              filterTaskList.map(eachTask => (
                <Tasks key={eachTask.id} taskDetails={eachTask} />
              ))
            )}
          </TasksContainer>
        </TaskDisplayContainer>
      </MainContainer>
    )
  }
}

export default App
