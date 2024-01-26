---
id: installation-sh
title: Installation - Linux & Mac
description: Advanced installation guide for Linux and Mac
---

# Installation for Linux and Mac

Advanced installation guide for Linux and Mac

- By default, all supported experimental features are enabled
- View additional arguments and examples in the `Options` section
- See the [FAQ](https://github.com/SpotX-Official/SpotX-Bash/wiki/SpotX%E2%80%90Bash-FAQ) for more information

#### Run the following command in terminal:

```sh
bash <(curl -sSL https://spotx-official.github.io/run.sh)
```

## Options

Command line arguements for installation

| Option | Description |
| --- | --- |
| `-B` | block Spotify auto-updates [macOS] |
| `-c` | clear Spotify app cache |
| `-d` | enable [developer mode](https://github.com/SpotX-Official/SpotX-Bash/wiki/SpotX%E2%80%90Bash-FAQ#what-is-developer-mode) |
| `-e` | exclude all experimental features |
| `-f` | force SpotX-Bash to run |
| `-h` | hide non-music on home screen |
| `--help` | print options |
| `-i` | enable interactive mode |
| `--installdeb` | install latest client deb pkg on APT-based distros [Linux] |
| `--installmac` | install latest supported client (macOS) |
| `-l` | [no lyrics background color](https://github.com/SpotX-Official/SpotX-Bash/issues/20#issuecomment-1762040019) |
| `-o` | use [old home screen UI](https://github.com/SpotX-Official/SpotX-Bash/wiki/SpotX%E2%80%90Bash-FAQ#what-is-the-old-and-new-ui) |
| `-p` | [paid premium-tier subscriber](https://github.com/SpotX-Official/SpotX-Bash/wiki/SpotX%E2%80%90Bash-FAQ#can-spotx-bash-be-used-with-a-paid-premium-account) |
| `-P <path>` | set path to Spotify |
| `-S` | skip [codesigning](https://github.com/SpotX-Official/SpotX-Bash/discussions/3) [macOS] |
| `--stable` | use with '--installdeb' for stable branch [Linux] |
| `--uninstall` | uninstall SpotX-Bash |
| `-v` | print SpotX-Bash version |
| `-V <version>` | install client version [macOS] |

## Examples

Some of the use case examples

**Run SpotX-Bash, clear app cache, enable dev mode, hide non-music categories**

```sh
bash <(curl -sSL https://spotx-official.github.io/run.sh) -cdh
```

**Run SpotX-Bash, enable interactive mode, set custom path to Spotify**

```sh
bash <(curl -sSL https://spotx-official.github.io/run.sh) -i -P $HOME/Downloads/
```

**Run SpotX-Bash, set paid premium-tier subscriber**

```sh
bash <(curl -sSL https://spotx-official.github.io/run.sh) -p
```

**Run SpotX-Bash, install latest testing branch client version (Linux)**

```sh
bash <(curl -sSL https://spotx-official.github.io/run.sh) --installdeb
```

**Run SpotX-Bash, block auto-updates, install latest supported client version (macOS)**

```sh
bash <(curl -sSL https://spotx-official.github.io/run.sh) -B --installmac
```