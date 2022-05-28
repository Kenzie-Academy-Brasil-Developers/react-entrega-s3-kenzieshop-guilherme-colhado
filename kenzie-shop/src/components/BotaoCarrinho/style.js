import { styled } from "@mui/system"
import Badge from '@mui/material/Badge';

export const BadgeStyled = styled(Badge)({
    marginRight: "10px",
    ".MuiBadge-badge": {
        backgroundColor: "var(--blue)",
        padding: "0px",
        fontSize: "12px",
        color: "white",
        transition: 'all .25s ease-in',
    }
})