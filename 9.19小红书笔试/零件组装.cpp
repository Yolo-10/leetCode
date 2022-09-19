#include <iostream>
using namespace std;

int computerRight(int num, int x)
{
  int tmp, res = 0;
  while (num--)
  {
    cin >> tmp;
    if (tmp > x)
      res++;
  }
  return res;
}

int main()
{
  int a1, a2, a3, a4, x;
  int rrr, res;
  cin >> a1 >> a2 >> a3 >> a4 >> x;
  rrr = computerRight(a1, x);
  res = rrr;
  rrr = computerRight(a2, x);
  res = res > rrr ? rrr : res;
  rrr = computerRight(a3, x);
  res = res > rrr ? rrr : res;
  rrr = computerRight(a4, x);
  res = res > rrr ? rrr : res;
  cout << res << endl;
  return 0;
}

// 小明管理了一家工厂。该工厂生产一种大型机械，需要由四种零件组装完成。我们不妨称这四种零件为A，B，C，D。
// 由于生产机械需要保证产品的质量，工厂对每个零件会进行检测，量化出每个零件的评分。评分当然有一个合格的分数（我们不妨假设它是x），当零件评分大于x的时候，该零件才是合格的。
// 四个分别合格的零件A,B,C,D可以组装成一个合格的大型机械。现在小明想知道当前产出的这些零件一共可以组装成多少合格的大型机械？
// 请注意：每个零件至多只能用于一个大型机械的组装，不能反复组装。
// 输入描述
// 第一行五个正整数，前四个正整数a1,a2,a3,a4分别表示有a1个零件A，a2个零件B，a3个零件C，a4个零件D，第五个正整数x表示合格的零件评分需要大于x。
// 接下来4行：
// 第二行有a1个空格分开的数字，分别表示这a1个零件A的评分。
// 第三行有a2个空格分开的数字，分别表示这a2个零件B的评分。
// 第四行有a3个空格分开的数字，分别表示这a3个零件C的评分。
// 第五行有a4个空格分开的数字，分别表示这a4个零件D的评分。
// 输出描述
// 输出一个数，表示可以组装成的大型机械的数量。
