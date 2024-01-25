---
sidebar_position: 1
sidebar_label: Quick Start

id: quickstart
# slug: /quickstart  # not neccessary
title: Quick Start
tags:
  - Getting Started
  - Installation
  - Quick Start
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>
  **Download and run `Install.bat`** or

  **Run The following command in PowerShell:**

  ```bat
  iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -new_theme"
  ```

  **mirror:**

  ```bat
  iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -new_theme"
  ```
  *Read guide for customized installation
  </TabItem>

  <TabItem value="linux_mac" label="Linux or MacOS">
    **Run the following command in terminal:**

    ```sh
    bash <(curl -sSL https://spotx-official.github.io/run.sh)
    ```

    *Read guide for customized installation
  </TabItem>
</Tabs>
