import { Box, Typography, TypographyProps } from "@mui/material";
import { CenteredBox } from "../../theme/GeneralStyledComponents";

export default function TitleHeader({ title, headerProps }: TitleHeaderProps) {
  return (
    <Box
      flexGrow={1}
      display="flex"
      // alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Box>
        <CenteredBox gap={1}>
          <Typography
            fontSize={20}
            fontWeight={500}
            color="common.black"
            {...headerProps}
          >
            {title}
          </Typography>
        </CenteredBox>
      </Box>
    </Box>
  );
}

export type TitleHeaderProps = {
  title: string;
  headerProps?: TypographyProps;
};
