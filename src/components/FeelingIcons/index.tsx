import { mdiRobotLove, mdiHeartBroken } from "@mdi/js";
import Icon from "@mdi/react";

type FeelingIconsProps = {
    Id: string;
    FeelingLevel: number;
    HorizontalAlignment: "left" | "center" | "right";
};

export default function FeelingIcons(props: FeelingIconsProps) {
    const getFeelingIconsFunc = (
        applicationId: string,
        feelingLevel: number
    ) => {
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
