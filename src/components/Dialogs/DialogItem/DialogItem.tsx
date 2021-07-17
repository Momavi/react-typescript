import { NavLink } from "react-router-dom"

function DialogItem(props: { name: string, id: number }) {
  return (
    <div className="dialog__item active">
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}
export default DialogItem