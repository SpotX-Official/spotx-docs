
## General Questions
* * * * *

### How to use this?

In short -- install Spotify desktop client then run the SpotX-Bash command mentioned in the README.

Expanding on the directions in the `README.md`...  
after installing Spotify on [Linux](#how-to-install-spotify-on-my-linux-distro) or [macOS](#how-to-install-spotify-on-my-mac), `SpotX-Bash` needs to be manually run to add its features to the installed Spotify client. Running the `bash <(curl...` command in the [README.md](https://github.com/SpotX-Official/SpotX-Bash#usage) is recommended as this will always run the latest version of the script which may be required to support more recent Spotify client versions. 

By default, `SpotX-Bash` is for free-tier Spotify users and enables experimental features supported by the installed client version. Paid premium subscribers or those who wish to customize features can use the additional options listed in the [README.md](https://github.com/SpotX-Official/SpotX-Bash#usage). Example commands can be found in the expanded `Options` section of the `README.md`. 

`SpotX-Bash` will need to run each time Spotify is installed, re-installed or updated. Alternatively, you can not update Spotify and continue using the `SpotX-Bash` patched build for as long as you want. The Linux client does not have an auto-updater but may or may not automatically be updated by the package manager, review update settings for your package manager. The macOS client does have an auto-updater built in but using the `SpotX-Bash` option, `-B`, will block the updater from running. 

### Which platforms and versions does SpotX-Bash support?

`SpotX-Bash` supports Spotify desktop clients on Linux and macOS. As of May 2023, Spotify has disabled `v1.1.58.820` and below. Technically, `SpotX-Bash` should work on all currently working versions of Spotify... `v1.1.59.710` and up.

For Linux, I am unaware of which technical requirements are required to run Spotify `v1.1.59.710` or higher but I would assume most Linux installations would be able to handle it as long as all dependencies are met. Spotify for Linux is built for x64 systems only (no ARM64 builds to date). 

For macOS, due to versions `v1.1.58.820` and below being disabled by Spotify, OS X 10.10 and below no longer support an official working Spotify desktop client. OS X 10.11+ is required. 

While `SpotX-Bash` may work with `v1.1.59.710`, the focus of SpotX-Bash is to support the current latest official client and Spotify v1.2.13.661+ is recommended for both Linux and macOS.

### Will SpotX-Bash ever support other platforms?

No, `SpotX-Bash` will only support Linux and macOS. [SpotX](https://github.com/SpotX-Official/SpotX) is available for Windows, [xManager](https://github.com/xManager-App/xManager/) is available for Android and [Spotilife](https://julio.hackyouriphone.org/) is available for iOS. 

### Why does SpotX-Bash say "Failed to connect" or "Could not be resolved"?

This error is not directly caused or related to `SpotX-Bash` but an issue somewhere between Github servers and your network.

- Some ISPs and networks block `raw.githubusercontent.com`
- Github may be having server issues
- URL used may have a typo

Due to `raw.githubusercontent.com` blocking, `github.io` is now the default URL mentioned in the README.md but either URL is an option if one is preferred over another...

- github.io:
```
bash <(curl -sSL https://spotx-official.github.io/run.sh)
```
- raw.githubusercontent.com:
```
bash <(curl -sSL https://raw.githubusercontent.com/SpotX-Official/SpotX-Bash/main/spotx.sh)
```
The repo could also be downloaded to run locally -- this is not ideal since `SpotX-Bash` is constantly being updated to support the latest Spotify versions. A local copy of the script is quickly outdated and may not work correctly with future Spotify versions.

### Why doesn't SpotX-Bash work with my shell?

The default recommended `SpotX-Bash` command in the [README.md](https://github.com/SpotX-Official/SpotX-Bash#usage) assumes the use of a Bash-compliant shell.

Shells which are not Bash-compliant may have issues with the recommended `SpotX-Bash` `bash <(curl...` command format. Refer to your shell documentation for the suggested handling of process substitution. 

Below are two examples of a "more universal" format which may work with your shell. When using additional options, `-s --` will need to precede all `SpotX-Bash` options.  

**Example w/o options:**
```
curl -sSL https://spotx-official.github.io/run.sh | bash
```
**Example w/options:**
```
curl -sSL https://spotx-official.github.io/run.sh | bash -s -- -cfh
```

### Does SpotX-Bash provide free Spotify Premium?

No, `SpotX-Bash` blocks ads and may enable some normally restricted settings. Premium features such as _**Very High**_ audio, group session listening, AI DJ, music downloading and offline playback require a paid Premium subscription.

### Does SpotX-Bash work on all Spotify updates?

`SpotX-Bash` needs to run each time Spotify is installed, re-installed or updated. Just as new Spotify updates are released, updates to the `SpotX-Bash` script are needed to continue working as expected. A brand new Spotify update may not yet work with the current SpotX-Bash version -- check the latest supported Spotify client version mentioned at the top of the repo [README.md](https://github.com/jetfir3/SpotX-Bash/#readme) to confirm `SpotX-Bash` will support your client version.

For Linux users, the Spotify client does not update itself via in-app update services and depends on the specific package manager or installation method used. 

For macOS users, the Spotify client has an in-app updater and will update itself automatically when a new version is available. `SpotX-Bash` has the option to block updates and/or install the latest supported (or a previous) Spotify version then patch it after installation -- it is recommended to install Spotify and block updates using `SpotX-Bash` so the Spotify client never auto-updates itself to a version not yet supported by `SpotX-Bash`.

### Can SpotX-Bash be used with a paid Premium account?

Yes, `SpotX-Bash` supports Premium-tier users and should be run with the `-p` flag to skip the usual modifications done for free-tier users.

### Can SpotX-Bash be used in any region?

`SpotX-Bash` itself is not limited by any region but Spotify may not be supported in your region and workarounds such as using a VPN or proxy may be required. Additionally, _**South Korea**_ is currently the only officially supported Spotify region that does NOT have a free-tier (outside of a trial subscription) and therefore users in South Korea who wish to use the Spotify free-tier must also use a VPN or proxy.  

**Using a Spotify account outside of officially supported regions is outside the scope of this project and further discussion of bypassing those limitations will not be supported in this repo.** 

### Why are there still ads when using Spotify Connect, AirPlay, Casting, etc?

When using any of these methods to play audio/video, the media is no longer coming from the desktop client and, instead, is being controlled by the Spotify API outside of the modified client. Since `SpotX-Bash` only modifies the desktop client and not your actual Spotify account, ads cannot be blocked when audio/video is not coming directly from the modified desktop client. Yes, you may be using the desktop client to control the play/pause/stop/skip functions while the audio/video is on another device, but the audio/video itself is no longer sourced from the desktop client where `SpotX-Bash` has made the modifications. 

### Are there security concerns with SpotX-Bash?

No, I don't believe there is anything unsafe with this script. The sole purpose of this project is ad blocking and enabling additional experimental features (most of which are official from Spotify).  

No logging or anything outside of the exact purpose of `SpotX-Bash` is done by this script. Of course, everything this script does can be reviewed by anyone. If an unintended security issue is discovered due to improper use of Bash or one of the components used in the script, it can be reported using the Github [security advisory template](https://github.com/jetfir3/SpotX-Bash/security/advisories/new). 

### Is SpotX-Bash safe for my account?

While there are no known instances of any `SpotX-Bash` users losing their Spotify accounts specifically from `SpotX-Bash` (or other ad blocking methods)... Spotify itself may have issues with blocking ads. `SpotX-Bash` does nothing related to copying/downloading/ripping music which are all things known to cause account issues. The only goal here is to remove ads and enable new (official) features which may not always be available to all by default due to Spotify a/b testing -- but use at your own risk and review the official terms and conditions for your region. 

### Can SpotX-Bash and Spicetify be used together?

Technically, yes. If using both `SpotX-Bash` and Spicetify, it is required to run `SpotX-Bash` before setting up Spicetify. Any issues appearing after setting up Spicetify is outside the scope of this project/repo and issues should **not** be reported here.

Using both together is not "officially supported" by either SpotX or Spicetify and it is on the user if running into issue. 

### Why does SpotX-Bash say "Spotify not found" when Spotify is installed?

In some cases, `SpotX-Bash` may be unable to find Spotify in its installed path. For these situations, the `-P [path]` flag must be used along with the usual `SpotX-Bash` command. 

_For Linux_ -- `SpotX-Bash` should auto-detect installations via APT, dpkg, Flatpak (user/system), pacman, RPM Fusion and spotify-launcher. If installation is not auto-detected use the `-P [path]` option, pointing to the full path of the the spotify directory where the main executable binary for Spotify is found.  
For example, if using the standard Flatpak installation of Spotify and the spotify executable is located at `/var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/spotify` then you would add `-P /var/lib/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/` to the `SpotX-Bash` command and the installation should be found.

Flatpak user installations default to: `$HOME/.local/share/flatpak/app/com.spotify.Client/x86_64/stable/active/files/extra/share/spotify/`

deb installations via APT or dpkg default to: `/usr/share/spotify/`

AUR installations default to: `/opt/spotify/`

spotify-launcher installations default to: `$HOME/.local/share/spotify-launcher/install/usr/share/spotify`

RPM installations default to: `/usr/share/spotify-client/`

_For macOS_ -- use the full path where `Spotify.app` is located. Default path for all macOS apps is in the /Applications/ directory.
For example, if Spotify.app is located at `/Applications/MyStuff/Spotify.app` then you would add `-P /Applications/MyStuff/` to the `SpotX-Bash` command and the installation should be found. 

### Why doesn't SpotX-Bash have "x" feature?

The goal of `SpotX-Bash` is blocking ads and enabling official experimental features. 

Customization beyond this is outside the scope of this project. Additionally, the goal is to always support the latest available Spotify client versions whenever possible therefore older Spotify versions may not always work with or be fully supported by the current script version.  

Availability of features also depends on the client version installed, Spotify changes things all the time. See the [Spotify Desktop Client Version Timeline](https://github.com/SpotX-Official/SpotX-Bash/wiki/Spotify-Desktop-Client-Version-Timeline) for details on some of changes between versions.

### What is Developer Mode?

`Developer Mode` enables additional features built into the Spotify desktop client which are normally hidden for regular users. For example, since Spotify is built to use the [Chromium Embedded Framework](https://www.spotify.com/opensource/), the same "Developer Tools" built into Chrome/Chromium become available. Additional features include the `Debug Window` which allows granular controls of many Spotify experimental settings normally controlled by Spotify's `Remote Config` (or by `SpotX` / `SpotX-Bash`). 

There are many more features available but many of which should probably be left alone unless you know what you're doing or don't mind risking breaking your Spotify install. If it does end up breaking after poking the wrong thing, wiping Spotify app cache (run `SpotX-Bash` with `-c`/`--clearcache`) will hopefully wipe any customization done with devmode.

To get to various `Developer Mode` menus/settings once it's been enabled:
- right-click in various areas of the app to reveal additional menus
- select the `Develop` menu added to the Spotify toolbar (macOS only)
- click your Spotify user icon > Debug Window

The `SpotX-Bash` developer mode is "permanent" and will be enabled until you upgrade/downgrade/reinstall the Spotify app. 
`SpotX-Bash` supports developer mode in versions `1.1.84.716` and up. Versions newer than what `SpotX-Bash` officially supports may not work.

A script for _temporary_ `Developer Mode` can be found [here](https://gist.github.com/jetfir3/d66f491d0683e2bdbdf9f60068e9984b). The advantage of the temp script is that it supports nearly all working Spotify builds, both old and new. The "downside" to the script is that dev mode is temporary and likely to only work until you quit Spotify. To access dev mode again, the script would need to be used each time. Changes you've made to experimental features while in dev mode will stick regardless of whether dev mode is currently enabled or not.

### What is the "old" and "new" UI?
The "old" theme was the default UI that Spotify users should be familiar with if they used the desktop or web clients from 2021-2023 (and possibly earlier). In early 2021 the desktop and web clients [merged code bases and started using the same UI](https://engineering.atspotify.com/2021/04/building-the-future-of-our-desktop-apps/). While in 2021 that UI may have been new, in 2023 it has become what we now call the "old" UI. In mid-2022, Spotify started experimenting with some search bar changes. Towards the end of 2022 they were testing a new left sidebar and in 2023, a new right sidebar. The [updated left/right sidebars](https://newsroom.spotify.com/2023-06-20/spotify-desktop-experience-redesign-your-library-now-playing-views-customize/) are what we are calling the "new" UI. 

From late 2022 through mid-2023, both the old and new UIs were available in the app and could be controlled via Spotify A/B testing (or through dev mode and mods like SpotX/etc). But starting with v1.2.14.x, the "old" UI was removed from the client and no longer an option. Spotify v1.2.13.661.ga588f749 is the last version which could use the "old" UI. 

If a user sets the `-o` option with v1.2.14+, `SpotX-Bash` will report an error about the detected client version no longer supporting the old UI ( then continue running the rest of the script). Users who prefer the "old" look should use v1.2.13.661.ga588f749 or earlier and NOT update the client. Mac users can have `SpotX-Bash` block Spotify's built-in auto-updates. Linux users will need to look into their distro package manager (or other installation method) to see how to avoid updates.  

### How can I troubleshoot issues?

Ideally, most issues should be unrelated to `SpotX-Bash` directly and, instead, are issues between Spotify itself and the computer it's installed on. To rule out `SpotX-Bash` issues, a full uninstall of Spotify and reinstallation of Spotify (without applying `SpotX-Bash`) should be attempted to confirm where the issue starts. All tests should be conducted on the exact same desktop client version to avoid missing Spotify version-specific bugs which may get blamed on `SpotX-Bash`.

See the [TROUBLESHOOTING](https://github.com/SpotX-Official/SpotX-Bash/wiki/Troubleshooting) section of the wiki for more info. 

## Linux Questions
* * * * *

### How to install Spotify on my Linux distro?

Officially, Spotify supports installations with Snap via Snap Store and deb via APT. You can visit Spotify's official Linux download page [here](https://www.spotify.com/download/linux/) for Debian / Ubuntu APT-based instructions. Snap installations are not supported by SpotX-Bash -- see the Q/A below for more info on that. Other distros will have their own specific methods of installation which all repackage the snap or deb to work with that disto, some methods are covered below. Use your search engine of choice if more info is needed -- it's your job to install Spotify, `SpotX-Bash`'s to patch it once installed. `SpotX-Bash` supports patching all installation methods outside of Snap. 

- [Flatpak](https://flathub.org/apps/com.spotify.Client) is a distro-neutral installation method, the Spotify install is based on the Spotify snap file with some additional patches applied.
- Red Hat/Fedora-based distros using RPM-based installations can use [RPM Fusion](https://docs.fedoraproject.org/en-US/quick-docs/installing-spotify/#_using_the_rpm_fusion_repository) repos.
- Arch-based users can install using [AUR/pacman/spotify-launcher](https://wiki.archlinux.org/title/spotify).

`SpotX-Bash` has the ability to install the testing branch deb package client on APT-based systems when using the `--installdeb` option flag. If the stable branch is preferred, the `--stable` option flag can be added in addition to the `--installdeb` option flag. 

### Is the Snap version of Spotify supported?
No, `SpotX-Bash` does not support Spotify from Snap.

Spotify from Snap is a read-only image file which creates additional steps and dependencies if trying to modify the app. `SpotX-Bash` _does_ support Spotify installs using Flatpak or distro-specific installation methods. If Snap installation is preferred, there are Spotify Snap files pre-patched with `SpotX-Bash` located in the SpotX Telegram community.

## macOS Questions
* * * * *

### What is the Spotify/macOS compatibility list?

As of May 2023, Spotify has disabled `v1.1.58.820` and below. Therefore, OS X 10.11 or higher is required to use the official desktop client.

The last version of Spotify to work with OS X 10.11/macOS 10.12 is `1.1.89.862`.
To have SpotX-Bash install this version, run the following command (additional arguments/flags/options can be added):
```
bash <(curl -sSL https://spotx-official.github.io/run.sh) -V 1.1.89.862
```

The last version of Spotify to work with macOS 10.13/10.14 is `1.2.20.1218`.
To have SpotX-Bash install this version, run the following command (additional arguments/flags/options can be added):  
```
bash <(curl -sSL https://spotx-official.github.io/run.sh) -V 1.2.20.1218
```
_**As of October 2023, when `--installmac` is used, `SpotX-Bash` auto-installs the last supported version for your OS.**_

As of September 2023, v1.2.21.1104 and higher now requires macOS 10.15+.

### How to install Spotify on my Mac?

Spotify's official download page can be found [here](https://www.spotify.com/download/other/). 

`SpotX-Bash` has the option to download and install the official Spotify desktop client, downloaded directly from Spotify's CDN. You can use the `--installmac` option or enable interactive mode (`-i`) to have `SpotX-Bash` download and install the latest `SpotX-Bash`-supported Spotify version or use `-V [version]` option while specifying a version number to choose a previous Spotify version. After `SpotX-Bash` downloads and installs Spotify it will continue with the usual patches it performs on the installed client. 

### What does codesigning have to do with SpotX-Bash and Spotify?

`SpotX-Bash` patches the client in various ways to enable its features. Depending on your version of macOS and your specific security settings related to macOS Gatekeeper and System Integrity Protection, modifying the client may cause various macOS protections to trigger and not launch the app. To bypass this potential issue, `SpotX-Bash`, by default, uses codesign to re-sign the Spotify desktop app after `SpotX-Bash` has modified it which should then make macOS "happy" and launch the modified app without issue.

You can read a more detailed breakdown of this information in the [Discussions section](https://github.com/SpotX-Official/SpotX-Bash/discussions/3) of the SpotX-Bash repo.
