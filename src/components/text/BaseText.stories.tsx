import { Meta, StoryObj } from "@storybook/react";
import { BaseText } from "./BaseText";

export default {
  title: "Components/Text",
  component: BaseText,
} as Meta<typeof BaseText>

type BaseTextStory = StoryObj<typeof BaseText>;

export const Heading1: BaseTextStory = {
  args: {
    bdType: 'h1',
    text: '>>MD(Dest)/H/H1',
  }
}

export const Heading2: BaseTextStory = {
  args: {
    bdType: 'h2',
    text: '>>MD(Dest)/H/H2',
  }
}

export const Heading3: BaseTextStory = {
  args: {
    bdType: 'h3',
    text: '>>MD(Dest)/H/H3',
  }
}

export const Heading4: BaseTextStory = {
  args: {
    bdType: 'h4',
    text: '>>MD(Dest)/H/H4',
  }
}

export const Heading5: BaseTextStory = {
  args: {
    bdType: 'h5',
    text: '>>MD(Dest)/H/H5',
  }
}

export const Heading6: BaseTextStory = {
  args: {
    bdType: 'h6',
    text: '>>MD(Dest)/H/H6',
  }
}

export const Paragraph1: BaseTextStory = {
  args: {
    bdType: 'p1',
    text: '>>MD(Dest)/P/P1',
  }
}

export const Paragraph2: BaseTextStory = {
  args: {
    bdType: 'p2',
    text: '>>MD(Dest)/P/P2',
  }
}

export const ParagraphLead1: BaseTextStory = {
  args: {
    bdType: 'lead1',
    text: '>>MD(Dest)/P/Lead1',
  }
}

export const ParagraphLead2: BaseTextStory = {
  args: {
    bdType: 'lead2',
    text: '>>MD(Dest)/P/Lead2',
  }
}

export const SmallMini: BaseTextStory = {
  args: {
    bdType: 'mini',
    text: '>>MD(Dest)/Small/Mini',
  }
}

export const SmallTiny: BaseTextStory = {
  args: {
    bdType: 'tiny',
    text: '>>MD(Dest)/Small/Tiny',
  }
}