import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme: 'primary' | 'secondary' | 'gray'
  size?: 'large' | 'default' | 'small' | 'smallest'
  loading?: boolean
}

const Button = ({
  children,
  theme,
  loading,
  size = 'default',
  ...props
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      {...props}
      type={props.type ? props.type : 'button'}
      className={`button ${props.className ?? ''}`}
      data-theme={theme}
      data-size={size}
      data-loading={loading ? 'true' : 'false'}
    >
      <div>{children}</div>
    </button>
  )
}

export default Button
