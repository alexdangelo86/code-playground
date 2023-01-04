import * as react from 'react'
import { Box } from '@mui/material'

type ExampleProps = {
  name: string
  age: number
  shoppingList?: string[]
  anotherList?: {
    name: string
    age: Number
  }[]
}

const Exmaple: React.FC<ExampleProps> = ({ name, age, shoppingList, anotherList }) => {
  return (
    <Box>
      <Box>
        Customer name: {name}
      </Box>
      <Box>
        age: {age}
      </Box>
      <Box>
        shopping list: {shoppingList?.map((item) => item)}
      </Box>
      <Box>
        another list: {anotherList?.map((item) => item.name + ' - ' + item.age)}
      </Box>
    </Box>
  )
}


<Example name="Jonh" age={4} anotherList={[{ name: 'bob', age: 12 }]}/>