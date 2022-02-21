---
id: 重定向printf至串口
title: 重定向 printf 至串口
---

```c title="usart.c"
/* USER CODE BEGIN 0 */

#include "stdio.h"

/* USER CODE END 0 */

/* USER CODE BEGIN 1 */

//_write 函数在 syscalls.c 中， 使用 __weak 定义， 所以可以直接在其他文件中定义 _write 函数
__attribute__((weak)) int _write(int file, char *ptr, int len)
{
	int DataIdx;
	for (DataIdx = 0; DataIdx < len; DataIdx++)
	{
		  while ((USART1->SR & 0X40) == 0); //等待发送完毕
		  USART1->DR = (uint8_t) *ptr++;
	}
	return len;
}

/* USER CODE END 1 */
```

## 参考与致谢

- [STM32CubeIDE 实现 printf 重定向输出到串口](https://blog.51cto.com/u_15353042/3751177)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
