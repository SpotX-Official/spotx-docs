---
id: installation-win
title: Installation - Windows
description: Advanced installation guide for Windows
---

# Installation

Advanced installation guide for Windows

## System requirements

- OS: Windows 7-11
- Spotify: latest official [versions](https://cutt.ly/8EH6NuH)
- For Windows Desktop only (Microsoft store version is not suitable)
- PowerShell: version 5 and above recommended

## Usual installation (New theme)

- New theme activated (new right and left sidebar, some cover change)
- All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included


#### Download and run [Install.bat](https://raw.githack.com/amd64fox/SpotX/main/Install_New_theme.bat)

or

#### Run the following command in PowerShell:

```powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -new_theme"
```

#### Mirror

```powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -new_theme"
```

## Usual installation (Old theme)

- Forced installation of version 1.2.13 (since the old theme was removed in subsequent versions)
- Old theme activated
- Automatic blocking of Spotify updates
- All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included

#### Download and run [Install.bat](https://raw.githack.com/amd64fox/SpotX/main/Install_Old_theme.bat)

or

#### Run the following command in PowerShell:

```powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -v 1.2.13.661.ga588f749-4064 -confirm_spoti_recomended_over -block_update_on"
```

#### Mirror

```powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -v 1.2.13.661.ga588f749-4064 -confirm_spoti_recomended_over -block_update_on"
```

## Full installation

- New theme activated (new right and left sidebar, some cover change)
- Hiding podcasts/episodes/audiobooks from the homepage
- Activated [static theme](https://github.com/SpotX-Official/SpotX/discussions/50#discussioncomment-4096066) `spotify` for lyrics
- Hiding [ad-like sections](https://github.com/SpotX-Official/SpotX/discussions/50#discussioncomment-4478943)
- All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included
- Removal of Spotify MS if it was found
- Installation of the recommended version of Spotify (if another client has already been found, it will be installed over)
- Blocking of Spotify updates
- After the installation is completed, the client will autorun.

#### Download and run [Install_Auto.bat](https://raw.githack.com/amd64fox/SpotX/main/scripts/Install_Auto.bat)

or

#### Run the following command in PowerShell:

```powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -confirm_uninstall_ms_spoti -confirm_spoti_recomended_over -podcasts_off -block_update_on -start_spoti -new_theme -adsections_off -lyrics_stat spotify"
```

#### Mirror

```powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -confirm_uninstall_ms_spoti -confirm_spoti_recomended_over -podcasts_off -block_update_on -start_spoti -new_theme -adsections_off -lyrics_stat spotify"
```

## Installation for premium

- New theme activated (new right and left sidebar, some cover change)
- Disabled only audio ads in podcasts
- All [experimental features](https://github.com/SpotX-Official/SpotX/discussions/50) included

#### Download and run [Install_Prem.bat](https://raw.githack.com/amd64fox/SpotX/main/scripts/Install_Prem.bat)

or

#### Run the following command in PowerShell:

```powershell
iex "& { $(iwr -useb 'https://raw.githubusercontent.com/SpotX-Official/spotx-official.github.io/main/run.ps1') } -premium -new_theme"
```

#### Mirror

```powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -premium -new_theme"
```

## Installing with parameters

You can customize your setup based on input parameters.

*For example*, we will perform an automatic installation for a premium account, we will also add automatically enabling Spotify after installation is completed:

[![91](https://user-images.githubusercontent.com/62529699/185788159-dfb08a84-9c29-47c1-906a-8543bfb4b2a6.gif)](https://user-images.githubusercontent.com/62529699/185788159-dfb08a84-9c29-47c1-906a-8543bfb4b2a6.gif)

#### Now our custom installer is ready:

```powershell
[Net.ServicePointManager]::SecurityProtocol = 3072; iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -podcasts_off -block_update_on -start_spoti -premium"
```

If it is more convenient for you to run the installation through a `.bat` file, then you can download any bat file like [this](https://raw.githack.com/amd64fox/SpotX/main/scripts/Install_Auto.bat) one and edit its parameters to your own.

You just need to substitute your parameters at the end of the command and start the installation.

:::warning
Do not use parameters that contradict each other simultaneously.
:::

## Parameters

### Install/uninstall

| Parameter | Description |
| --- | --- |
| `-version`, `-v` | Shange recommended version of Spotify. Example: `-version 1.2.13.661.ga588f749-4064` |
| `-confirm_spoti_recomended_over`, `-sp-over` | If an outdated/unsupported version of Spotify is found, the recommended version will automatically be installed over it |
| `-confirm_spoti_recomended_uninstall`, `-sp-uninstall` | If an outdated or unsupported version of Spotify is found, it will be automatically uninstalled and the recommended version will be installed |
| `-confirm_uninstall_ms_spoti` | Automatic uninstallation of Spotify MS if it was found |

:::note
A list of versions can be found on this [spreadsheet](https://docs.google.com/spreadsheets/d/1wztO1L4zvNykBRw7X4jxP8pvo11oQjT0O5DvZ_-S4Ok)
:::

### Experimental features

| Parameter | Description |
| --- | --- |
| `-exp_spotify` | All standard and experimental features are now managed by Spotify developers, just like in the original client. |
| `-new_theme` | New theme activated (new right and left sidebar, some cover change) |
| `-topsearchbar` | Enable [top search bar](https://github.com/SpotX-Official/SpotX/discussions/50#discussioncomment-8093445) |
| `-rightsidebar_off` | Disable new right sidebar |
| `-rightsidebarcolor` | Enable right sidebar coloring to match cover color (only works with new theme) |
| `-old_lyrics` | Return old lyrics for new theme |
| `-lyrics_stat` | Enable [static themes](https://github.com/amd64fox/SpotX/discussions/50#discussioncomment-4096066) for lyrics, for example, this way you can turn on theme blueberry: `-lyrics_stat blueberry` |
| `-adsections_off` | [Hiding ad-like sections](https://github.com/amd64fox/SpotX/discussions/50#discussioncomment-4478943) from the homepage |
| `-plus` | [Plus button](https://github.com/SpotX-Official/SpotX/discussions/50#discussioncomment-7446947) replaces the heart button, you can save and select destinations for songs, playlists, or podcasts |
| `-enhancesongs` | Enable [enhance playlist and liked songs](https://github.com/SpotX-Official/SpotX/discussions/50#discussion-4108773) |
| `-enhance_like_off` | Don't enable enhance liked songs |
| `-enhance_playlist_off` | Don't enable enhance playlist songs |
| `-hide_col_icon_off` | Don't hide the icon of collaborations in playlists |
| `-funnyprogressBar` | [Funny progress bar](https://github.com/amd64fox/SpotX/discussions/50#discussioncomment-6203092) (works with 1.2.14) |

:::note
- Sometimes Spotify developers forcefully enable\disable experimental features for everyone. In this case, enabling\disabling them will no longer work, so either live with it or stay on the old version of Spotify in which it worked for you.
- All standard and experimental features are now managed by Spotify developers, just like in the original client.
:::

:::warning
SpotX will still control the exp features that are crucial for disabling ads or for the operation of other SpotX features
:::

### Patcher language

| Parameter | Description |
| --- | --- |
| `-language it` | Forced Italian for installer |
| `-l it` | A simplified version of the same command |

- If none of these parameters is specified, then the script will automatically run in a supported language, if the found language is not supported, then the default language (English) will be applied
- Following languages are currently [available](https://github.com/amd64fox/SpotX/tree/main/scripts/installer-lang)
- If you want to translate into your language, you can do it [here](https://github.com/amd64fox/SpotX/issues/new/choose)

### Podcasts

| Parameter | Description |
| --- | --- |
| `-podcasts_off` | Remove podcasts from homepage |
| `-podcasts_on` | Don't remove podcasts from homepage |

> If none of these options are specified, you will be prompted with a choice during installation

### Blocking updates

| Parameter | Description |
| --- | --- |
| `-block_update_on` | Block Spotify automatic updates |
| `-block_update_off` | Don't block Spotify automatic updates |

> If none of these options are specified, you will be prompted with a choice during installation

### Other parameters

| Parameter | Description |
| --- | --- |
| `-mirror`, `-m` | Use github.io mirror instead of raw.githubusercontent |
| `-devtools`, `-dev` | Activates [developer mode](https://github.com/SpotX-Official/SpotX/discussions/50#discussioncomment-7546818) |
| `-cache_limit`, `-cl` | Change limit for clearing audio cache. Example: set the cache limit to 700 MB `-cache_limit 700` or `-cl 700` (value range from 500 to 20000) |
| `-premium` | Installation without ad blocking for premium accounts (ads are blocked only in podcasts) |
| `-urlform_goofy`, `-idbox_goofy` | [History](https://github.com/amd64fox/SpotX/discussions/50#discussioncomment-4479065) of listening to songs |
| `-start_spoti` | Automatic launch of Spotify after installation is complete |
| `-no_shortcut` | Do not add Spotify shortcut to desktop |

:::note
In the installation batch files, a mirror is automatically used, therefore, if you are experiencing connection issues, you can use a batch file from the existing ones in the repository. Alternatively, if you want to use the GitHub.io mirror directly without a batch file, use the following command:

```source-powershell
iex "& { $(iwr -useb 'https://spotx-official.github.io/run.ps1') } -m -new_theme"
```
:::
