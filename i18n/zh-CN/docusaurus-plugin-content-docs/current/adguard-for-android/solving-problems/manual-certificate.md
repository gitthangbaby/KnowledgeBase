---
title: Android 11+ 设备上的证书安装
sidebar_position: 12
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

To be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering.md) (which is extremely important as most ads use HTTPS), AdGuard needs to install its certificate into your device's user storage. 旧版本的 Android 操作系统可以自动完成，但在 Android 11 及更高版本上，用户必须手动安装。

![证书 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Follow these steps to install the AdGuard certificate:

1. 当您看到「*HTTPS 过滤已关闭*」的通知时，点击「*启用*」。

1. 然后您将看到三个画面，它们分别解释了：
    - 为什么要过滤 HTTPS 流量
    - 过滤过程的安全性
    - The necessity of the AdGuard certificate

    连续点击「*下一步*」→「*下一步*」→「*保存证书*」。

1. 在打开的「*下载*」文件夹底部点击「*保存*」。

1. 保存后，点击「*打开设置*」。

1. 点击「*更多安全设置*」→「*加密和凭据*」→「*安装证书*」→「*CA 证书*」。

1. 您可能会看到一条警告。 如果有的话，请点击「*仍然安装*」并输入您的 PIN 码（如有必要）。

1. 选择 AdGuard 证书文件。 它的名称应该类似于「*adguard_1342_020322.crt*」。

一切就绪！ 证书安装成功后，您就启用了 HTTPS 过滤。

请注意，以上提供的步骤基于 Google Pixel 7 智能手机。 如果您使用不同的 Android 设备，具体的菜单名称或选项可能会有所不同。 为方便导航，可考虑在设置搜索栏中输入「证书」或「凭证」搜索证书。

如您在手动安装证书期间遇到问题（例如，应用持续忽略已安装证书），可以尝试以下解决方案。

1. 重启 AdGuard。
2. 再次尝试安装正确的证书（AdGuard Personal CA）。

如问题仍然存在使您无法安装证书，请联系我们的支持团队 support@adguard.com。
