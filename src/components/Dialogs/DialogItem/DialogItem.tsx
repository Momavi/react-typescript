import { NavLink } from "react-router-dom"

function DialogItem(props: { name: string, id: number }) {
  return (
    <div className="dialogs__item active">
      <NavLink className="dialogs__item-link" to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}
export default DialogItem