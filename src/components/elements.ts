import styled from 'styled-components';
import { colors, fontSizes } from './theme';

export const Flex = styled.div`
    display: flex;
`;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;

export const Text = styled.span`
    color: ${colors.almost_black};
    font-size: ${fontSizes.regular};
`;

export const SmallText = styled.span`
    color: ${colors.warm_grey};
    font-size: ${fontSizes.small};
`;

export const Title = styled.span`
    color: ${colors.almost_black};
    font-size: ${fontSizes.medium};
`;

export const Section = styled(FlexColumn)`
    border-radius: 20px 20px 0 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    flex: 1;
    background-color: ${colors.definitely_white}
`;

export const SectionHeader = styled(Flex)`
    border-radius: 20px 20px 0 0;
    background-color: ${colors.terra_cotta_red};
    height: 60px;
    padding: 8px 16px;
    align-items: center;
`;
