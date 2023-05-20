export enum EButton {
  full = 'full',
  inherit = 'inherit',
}

export interface IButton {
  text: string
  type: EButton
  onClick?: (e: any) => void
  disabled?: boolean
}
