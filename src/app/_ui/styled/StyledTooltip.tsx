'use client';

import React, { PropsWithChildren } from 'react';
import { Tooltip } from 'react-tooltip';

type Props = {
  id: string;
};

export default function StyledTooltip({ id, children }: PropsWithChildren<Props>) {
  return <Tooltip id={id}>{children}</Tooltip>;
}
