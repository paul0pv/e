
import { BuildingStorefrontIcon, ClipboardDocumentListIcon, ReceiptPercentIcon, SquaresPlusIcon, IdentificationIcon, PhotoIcon, PuzzlePieceIcon, KeyIcon } from "@heroicons/react/24/outline"
import HoverAdvice from "../HoverAdvice";


const iconOptionDeco = "w-8 h-8 m-auto md:mx-0"

const currentRoutes = [
    {
        route: "menu",
        icon: <BuildingStorefrontIcon className={iconOptionDeco} />
    },
    {
        route: "ofertas",
        icon: <ReceiptPercentIcon className={iconOptionDeco} />
    },
    {
        route: "reseñas",
        icon: <ClipboardDocumentListIcon className={iconOptionDeco} />
    },
    {
        route: "reservas",
        icon: <SquaresPlusIcon className={iconOptionDeco} />
    },
    {
        route: "foto",
        icon: <PhotoIcon className={iconOptionDeco} />
    },
    {
        route: "datos",
        icon: <IdentificationIcon className={iconOptionDeco} />
    },
    {
        route: "contraseña",
        icon: <KeyIcon className={iconOptionDeco}/>
    },
    {
        route: "sistema",
        icon: <PuzzlePieceIcon className={iconOptionDeco} />
    }
]

interface IRouteStructure {
    changeSection: any;
    section: any;
    advice?: string;
    textButton: string;
    implement?: boolean;
}

export default function InternalRouteButton({ changeSection, section, advice, textButton, implement = false }: IRouteStructure) {

    const optionsDeco = "btn flex rounded-box mx-4 w-60 justify-between md:w-80"
    const stateOptionDeco = implement ? "hover:scale-110" : "pointer-events-none"
    const optionIcon = currentRoutes.find((route) => route.route == section)
    return (
        <div className={`${optionsDeco} ${stateOptionDeco}`} onClick={() => changeSection(section)} >
            <div className="flex">
            {optionIcon!.icon}
            <span className="my-auto mx-2">{textButton}</span>
            {!implement && <span className="badge my-auto">próximamente</span>}
            </div>
            {advice && <HoverAdvice advice={advice}/>}
        </div>
    )
}