import styled from "styled-components";
import { createPortal } from "react-dom";
import { Button } from "react-bootstrap";
import { ReactNode } from "react";

type ModalProps = {
    /** Permits to show or hide the modal */
    show: boolean;
    /** Action executed when the modal is closed by clicking outside of it or by cancelling the action */
    onClose: (event: React.MouseEvent<HTMLSpanElement>) => void;
    /** Action executed when the validation button is clicked */
    onValidation?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    title: string;
    /** Indicates if the validation and cancel button will be displayed */
    withValidation?: boolean;
    children: ReactNode;
};

const COMMON_VERTICAL_PADDING = "10px";
const COMMON_HORIZONTAL_PADDING = "24px";
const COMMON_BORDER_RADIUS = "5px";

const ModalWrapper = styled.div`
    font-family: secondFont !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
`;

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModalTitle = styled.h3`
    background-color: var(--my-var-main-bg-color);
    margin: 0px 0px !important;
    padding: ${COMMON_VERTICAL_PADDING} ${COMMON_HORIZONTAL_PADDING};
    display: block;
    border-radius: ${COMMON_BORDER_RADIUS} ${COMMON_BORDER_RADIUS} 0 0;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: ${COMMON_HORIZONTAL_PADDING};
    display: block;
`;

const ModalFooter = styled.div`
    background-color: var(--my-var-main-bg-color);
    padding: ${COMMON_VERTICAL_PADDING} ${COMMON_HORIZONTAL_PADDING};
    display: block;
    border-radius: 0 0 ${COMMON_BORDER_RADIUS} ${COMMON_BORDER_RADIUS};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 20px;
`;

/** Modal component
-------------------------
@returns A modal component that can be used to display content in a popup window.
By default the modal can be closed by clicking outside of it.
If the "withValidation" prop is set to true, it will display two buttons
to confirm or cancel an action.
*/
export default function Modal(props: ModalProps) {
    if (!props.show) return null;
    return (
        <>
            {/* createPortal function is used to teleport the modal outside the "root" element */}
            {createPortal(
                <ModalWrapper
                    onClick={(e) => {
                        props.onClose(e);
                        e.stopPropagation();
                    }}
                >
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <ModalTitle>{props.title}</ModalTitle>
                        <ModalContent>{props.children}</ModalContent>
                        {props.withValidation && props.onValidation && (
                            <ModalFooter>
                                <Button
                                    variant="secondary"
                                    onClick={props.onClose}
                                >
                                    NON
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={props.onValidation}
                                >
                                    Oui
                                </Button>
                            </ModalFooter>
                        )}
                    </ModalBody>
                </ModalWrapper>,
                document.body
            )}
        </>
    );
}
