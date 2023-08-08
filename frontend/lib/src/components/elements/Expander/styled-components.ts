/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"

export const StyledIconContainer = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.sm,
  alignItems: "center",
}))

export const StyledExpandableContainer = styled.div(({ theme }) => ({
  ".streamlit-expanderHeader:hover svg": {
    fill: theme.colors.primary,
  },
  ".streamlit-expander.empty": {
    "div[aria-expanded='true'] + .streamlit-expanderContent": {
      color: theme.colors.darkGray,
      fontStyle: "italic",
      fontSize: theme.fontSizes.sm,
      textAlign: "center",
      paddingBottom: theme.spacing.lg,
      paddingTop: theme.spacing.lg,

      "&:before": {
        content: '"empty"',
      },
    },
  },
}))