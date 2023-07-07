import {IcSettingWhite} from "@/public/images";

export default function SettingPlayer(props) {

  const { windowSize } = props

  return (
    <div style={{ width: "15%" }} className="flex item-center place-content-center ">
      <IcSettingWhite width={windowSize.width >= 1024 ? 18 : 12}
                      height={windowSize.width >= 1024 ? 18 : 12}
                      className="cursor-pointer"/>
    </div>
  )
}