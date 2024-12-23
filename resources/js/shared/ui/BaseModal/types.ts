import { ReactNode } from "react"

export type TProps = {
    children: ReactNode
    open: boolean
    onClose: () => void 
}
