interface IProps {
  onClose: () => void
  title: string
}
const ModalHeader = (props: IProps) => {
  return (
    <div>
      <h2 className="text--heading1 text-500">{props.title}</h2>
    </div>
  )
}

export default ModalHeader
