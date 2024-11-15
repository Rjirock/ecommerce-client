import AccountProfile from "@/components/AccountProfile"
import { LayoutEl } from "@/shared/layoutEl"


const Page=()=>{
    const display=(
        <>
          <LayoutEl>
              <AccountProfile/>
          </LayoutEl>
        </>
    )
    return display
}
export default Page