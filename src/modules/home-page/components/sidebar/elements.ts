import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { FlexColumn } from '../../../../components/elements';
import { colors } from '../../../../components/theme';

export const StyledSidebar = styled(FlexColumn)`
    width: 160px;
    padding: 8px 16px 8px 0;
`;

export const Link = styled(NavLink).attrs({
    activeStyle: {
        color: colors.almost_black,
        backgroundColor: colors.sheen_green,
        cursor: "default"
    }
})`
    text-decoration: none;
    padding: 8px 16px;
    margin: 0 16px 0 -16px;
    color: ${colors.warm_grey};
    border-radius: 0 20px 20px 0;
`;