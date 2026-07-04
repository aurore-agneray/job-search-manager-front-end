import { mdiRobotLove, mdiHeartBroken } from "@mdi/js";
import { Icon } from "@mdi/react";

/**
 * Represents the properties for the ApplicationDeleteTrigger component
 */
type FeelingIconsProps = {
    /** ID of the concerned job application */
    Id: string;
    /** A number between 0 and 5 */
    FeelingLevel: number | "";
    /** Indicates the horizontal alignment of the icons */
    HorizontalAlignment: "left" | "center" | "right";
};

/** FeelingIcons component
-------------------------
@param Id used to identify the feeling icon
@param FeelingLevel a number between 0 and 5, or an empty string
@returns A selectable badge containing a text and a background color
*/
export default function FeelingIcons(props: FeelingIconsProps) {
    /**
     * getFeelingIconsFunc
     * ------------------
     * Generates the appropriate icons quantity based on the feeling level
     */
    const getFeelingIconsFunc = (
        applicationId: string,
        feelingLevel: number | ""
    ) => {
        if (feelingLevel === "") {
            return null;
        }

        if (feelingLevel === 0) {
            return (
                <Icon
                    color="var(--my-var-bad-feeling-color)"
                    path={mdiHeartBroken}
                    size={1}
                />
            );
        }

        return [1, 2, 3, 4, 5].slice(0, feelingLevel).map((lvl) => (
            <Icon
                color="var(--my-var-good-feeling-color)"
                key={applicationId + lvl}
                path={mdiRobotLove}
                size={1}
            />
        ));
    };

    return (
        <p style={{ textAlign: props.HorizontalAlignment }}>
            {getFeelingIconsFunc(props.Id, props.FeelingLevel)}
        </p>
    );
}
