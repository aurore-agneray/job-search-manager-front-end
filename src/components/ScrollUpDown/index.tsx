import { Icon } from "@mdi/react";
import styled from "styled-components";
import { mdiArrowDown, mdiArrowUp } from "@mdi/js";
import { ScrollToTopOrBottom } from "../../utils/common";

const ScrollUpDownDiv = styled.div`
    position: fixed;
    z-index: 9999;
    background-color: var(--my-var-scroll-up-down-bg-color);
    opacity: 0.7;
    left: 10px;
    bottom: 20px;
    height: 120px;
    width: 60px;
    border-radius: 20px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

/**
 * @returns a litlle floating component which allows to scroll top or down into the global page by clicking on arrows
 */
export default function ScrollUpDown() {
    return (
        <>
            <ScrollUpDownDiv>
                <div onClick={() => ScrollToTopOrBottom(true)}>
                    <Icon
                        className="link-icon"
                        path={mdiArrowUp}
                        size={2}
                        color="var(--my-var-scroll-up-down-arrows-color)"
                    />
                </div>
                <div onClick={() => ScrollToTopOrBottom(false)}>
                    <Icon
                        className="link-icon"
                        path={mdiArrowDown}
                        size={2}
                        color="var(--my-var-scroll-up-down-arrows-color)"
                    />
                </div>
            </ScrollUpDownDiv>
        </>
    );
}
