import { Billboard as Billboardtype  } from "@/types";

interface billboardProps {
    data :Billboardtype
}
 export const Billboardcomponenet : React.FC<billboardProps> = ({data}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div style={{ backgroundImage: ` url(${data?.imgUrl})` }} className="  rounded-xl relative aspect-[3.4/1] overflow-hidden bg-cover">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div  className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              {data?.label}
            </div>
          </div>
        </div>
      </div>
    )
}