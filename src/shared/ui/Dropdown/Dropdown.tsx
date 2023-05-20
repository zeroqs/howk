export const options = [
  { value: 'Dropdown option', label: 'Dropdown option' },
  { value: 'Dropdown option 2', label: 'Dropdown option 1 ' },
  { value: 'Dropdown option 3', label: 'Dropdown option 2' },
]
export const customStyles = {
  // @ts-ignore
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? '#fff' : '#CCCCCC',
    backgroundColor: state.isSelected ? '#7A5CFA' : '#fff',
  }),
  // @ts-ignore

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: '#fff',
    padding: '16px',
    border: '1px solid #CCCCCC',
    boxShadow: 'none',
  }),
  // @ts-ignore

  singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#000' }),
}
