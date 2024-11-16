import CheckOut from "@/components/Checkout"
import { LayoutEl } from "@/shared/layoutEl"

const Page=()=>{
    const display=(
        <>
          <LayoutEl>
            <CheckOut/>
          </LayoutEl>
        </>
    )
    return display
}
export default Page