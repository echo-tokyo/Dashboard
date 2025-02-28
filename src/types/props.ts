export interface IPropsInput {
  setHandleChange: (value: string) => void
  handleChange: string
  testsCount: number
}

export interface INoResultsProps {
  handleChangeReset: () => void
}