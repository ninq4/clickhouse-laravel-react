import { ReactNode } from "react"

export type Props = {
    children: ReactNode
    onClick?: () => void
    className?: string
    href?: string

}
