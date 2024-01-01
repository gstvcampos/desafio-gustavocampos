import { SVGProps } from 'react'

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.983 8.053v5.578M8.73 5.383v8.249M12.416 11v2.631" />
      <path
        d="M.718 9.533c0-6.085 2.003-8.114 8.012-8.114 6.01 0 8.013 2.029 8.013 8.114 0 6.085-2.004 8.114-8.013 8.114S.718 15.618.718 9.533Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
