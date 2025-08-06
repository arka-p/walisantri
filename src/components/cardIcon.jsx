import { ChecklistIcon } from "../components/checlistIcon"

export function CardIcon( {title, Content} ) {
    return (
        <div className="bg-white rounded-xl pt-8 pb-8 px-6 md:px-4 h-full">
            <div className="space-y-4">
                <div>
                    <ChecklistIcon />
                </div>
                <div className="text-xl font-bold tracking-tight">{title}</div>
                <div>{Content}</div>
            </div>
        </div>
    )
}