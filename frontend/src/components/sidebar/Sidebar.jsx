import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"
const Sidebar = () => {
  return (
    <div className="boarder-r boarder-slate-500 p-4 flex flex-col">
      <SearchInput></SearchInput>
      <div className="divider px-3"></div>
      <Conversations></Conversations>
      <LogoutButton></LogoutButton>
    </div>
  )
}

export default Sidebar