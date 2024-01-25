

* * * * *



* * * * *



* * * * *



* * * * *

### Why block Spotify automatic updates?

The official Spotify is automatically updated about once or twice a month, if this happens then SpotX will be lost to you as the official Spotify installer will simply overwrite it, and you will need to reinstall it.

If you block updates while installing SpotX, it will continue to work until you uninstall it yourself.

It is recommended to block updates so that SpotX works as long as possible for you. 

* * * * *

### I get ads when I use Spotify Connect, Airplay etc. Why?

Ads are blocked only in the desktop application, if you redirect the audio stream to another device using Spotify Connect, Airplay or something like that, ads may appear on some devices because the audio stream is no longer coming from the desktop application.

* * * * *

### Does Discord Listen Along work?

To invite friends to listen, they'll need to have Spotify Premium or they'll

receive an error!\
or use [plugins](https://youtu.be/iTN50HCZtak) for modified discord client

* * * * *

### It seems I have an old version of PowerShell 2.0, can I install a patch with it?

No, you will get something similar to this error:

![](https://telegra.ph/file/d2a063ea86a285b2ac9ee.png)

Typical error for an outdated version of PowerShell

Script only works starting from version 5, you need to update NET Framework and PowerShell.

Do the following:

-   Upgrade to [NET Framework 4.8](https://go.microsoft.com/fwlink/?linkid=2088631)
-   Upgrade to [WMF 5.1](https://www.microsoft.com/en-us/download/details.aspx?id=54616)
-   Reboot your PC

* * * * *

### How to downgrade Spotify version?

If you have problems with the patch after upgrading the client version, then use this [tool](https://github.com/amd64fox/Rollback-Spotify) to revert to a previously working version of Spotify.

* * * * *

### My antivirus found a threat in SpotX, should I be worried about my security?

SpotX is completely secure, this is a false positive. At the moment, most modern antiviruses use artificial intelligence to identify new threats and sometimes it does not work quite correctly, sometimes it takes time to fix this false positive. You can simply add the offending files to your antivirus exclusion list or temporarily disable your protection.

I use completely open source code written mostly in PowerShell. Feel free to review the code in its entirety in the SpotX repo and if you find anything odd, ask me about the specific code in question.

Questions like: my antivirus swears at SpotX are not accepted and will be ignored.

* * * * *

### Can Spotify ban my account for using SpotX?

In practice, I do not know of a single case of an account being banned for using a mod. An important rule, if you are chatting with Spotify support and are asked questions about using third-party software, etc., always answer no. If you, yourself, admit to using the mod then you will probably get your account banned.

* * * * *

### I got an error editing my hosts file, how can I fix it?

![](https://telegra.ph/file/6d7071cd26fb2ad2b998a.png)

Error editing hosts file

-   This error can be fixed in two ways:Just run the bat file as administrator

or

-   Manually editing the hosts file, you need to open and remove all lines from it that relate to Spotify

* * * * *

### My hosts file got corrupted during installation, how do I get it back?

If you need your old hosts file, then you can find a backup of it in the same folder named **hosts.bak**

* * * * *

### Can I use SpotX and [Spicetify](https://github.com/khanhas/spicetify-cli) together?

Clean install looks like this :

-   install SpotX
-   install Spicetify (tweak it to your liking)

> **Important** ‼️

> I do not recommend using them together, only do so if you have a valid reason for doing so.

* * * * *

### I have a premium account but I still want to use SpotX, is this possible?

Yes, there is such an opportunity, you need to run a [special installation](https://raw.githack.com/amd64fox/SpotX/main/scripts/Install_Prem.bat) without ad blocking.

* * * * *

### During installation, the text is displayed incorrectly, how can I fix this?

![](https://telegra.ph/file/7ba2bcd3670469ade0374.jpg)

Incorrect font display

The simplest solution to this problem is to use [terminal windows](https://docs.microsoft.com/en-us/windows/terminal/install)

* * * * *

### I get the error "Unable to connect to remote server" or "The remote name could not be resolved" while running the install

![](https://telegra.ph/file/0fbc0abe90bb741f9f92b.png)

Unable to connect to remote server

![](https://telegra.ph/file/8e308754b7eb9754356f6.png)

The remote name could not be resolved

This is problems with your connection, your internet provider is blocking access to GitHub resources, you can either change network, change DNS from ISP default or use VPN.

* * * * *

### How to enable DevTools?

Use this [repository](https://github.com/amd64fox/Enable-devtools-Spotify) to enable DevTools

* * * * *

### My region is South Korea and the mod doesn`t work for me, why?

South Korea is the only region that does not offer a free Spotify tier, the mod will not work in that region unless using a premium subscription.

* * * * *

### I want to translate the installer into my language, how can I do that?

If you would like to translate the installer into your language, you can do so [here](https://github.com/amd64fox/SpotX/issues/new?assignees=&labels=%F0%9F%8C%90+New+translation&template=installer-new-translation.yml). If you notice a bug in current languages, you can report it [here](https://github.com/amd64fox/SpotX/issues/new?assignees=&labels=%F0%9F%8C%90+Fix+translation&template=itranslation-fix.yml).

* * * * *

### Can I change some of the experimental features?

It's possible, follow this [guide](https://github.com/amd64fox/SpotX/discussions/47).

* * * * *

### My problem is not listed, what should I do?

You can use the search for already [resolved issues](https://github.com/amd64fox/SpotX/issues?q=) in the Github repository, if your search was unsuccessful there too, then create a [new issue](https://github.com/amd64fox/SpotX/issues/new?assignees=&labels=%E2%9D%8C+bug&template=bug_report.yml).

Report content on this page