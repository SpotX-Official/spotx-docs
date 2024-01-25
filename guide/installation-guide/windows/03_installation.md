---
# sidebar_position: 1
sidebar_label: Installation

id: installation
# slug: /quickstart  # not neccessary
tags:
  - Getting Started
  - Installation
  - Requirements
---

# Installation

## Usual installation (New theme)

:::info

#### During installation, you need to confirm some actions, also contains:

- New theme activated (new right and left sidebar, some cover change)
- All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included

:::

#### Just download and run [Install.bat](https://raw.githack.com/amd64fox/SpotX/main/Install_New_theme.bat)

or

#### Run The following command in PowerShell:

```source-powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -new_theme"
```

#### mirror

```source-powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -new_theme"
```

## Usual installation (Old theme)

:::info

#### During installation, you need to confirm some actions, also contains:

- Forced installation of version 1.2.13 (since the old theme was removed in subsequent versions)
- Old theme activated
- Automatic blocking of Spotify updates
- All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included

:::

#### Just download and run [Install.bat](https://raw.githack.com/amd64fox/SpotX/main/Install_Old_theme.bat)

or

#### Run The following command in PowerShell:

```source-powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -v 1.2.13.661.ga588f749-4064 -confirm_spoti_recomended_over -block_update_on"
```

#### mirror

```source-powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -v 1.2.13.661.ga588f749-4064 -confirm_spoti_recomended_over -block_update_on"
```

## Full installation

#### Full installation without confirmation, what does it do?

- New theme activated (new right and left sidebar, some cover change)
- Hiding podcasts/episodes/audiobooks from the homepage
- Activated [static theme](https://github.com/SpotX-Official/SpotX/discussions/50#discussioncomment-4096066) `spotify` for lyrics
- Hiding [ad-like sections](https://github.com/SpotX-Official/SpotX/discussions/50#discussioncomment-4478943)
- All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included
- Removal of Spotify MS if it was found
- Installation of the recommended version of Spotify (if another client has already been found, it will be installed over)
- Blocking of Spotify updates
- After the installation is completed, the client will autorun.

#### Just download and run [Install_Auto.bat](https://raw.githack.com/amd64fox/SpotX/main/scripts/Install_Auto.bat)

or

#### Run The following command in PowerShell:

```source-powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -confirm_uninstall_ms_spoti -confirm_spoti_recomended_over -podcasts_off -block_update_on -start_spoti -new_theme -adsections_off -lyrics_stat spotify"
```

#### mirror

```source-powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -confirm_uninstall_ms_spoti -confirm_spoti_recomended_over -podcasts_off -block_update_on -start_spoti -new_theme -adsections_off -lyrics_stat spotify"
```

## Other types of installations

### Installation for premium

#### Usual installation only without ad blocking, for those who have a premium account, also contains:

-   New theme activated (new right and left sidebar, some cover change)
-   Disabled only audio ads in podcasts
-   All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included

#### Just download and run [Install_Prem.bat](https://raw.githack.com/amd64fox/SpotX/main/scripts/Install_Prem.bat)

or

#### Run The following command in PowerShell:

```source-powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -premium -new_theme"
```

#### mirror

```source-powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -premium -new_theme"
```

### Installing with parameters

You can specify various parameters for a more flexible installation, more [details here](https://github.com/SpotX-Official/SpotX/discussions/60)