import Button1 from 'components/Button1';
import Button2 from 'components/Button2';
import {css, theme} from 'style';

export default function Index() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
      <div style={{display: 'flex', gap: 20}}>
        <Button1>Blue</Button1>
        <Button1 color="violet">Violet</Button1>
        <Button1 color="blue" appearance="outline">
          Blue, outline
        </Button1>
        <Button1 color="violet" appearance="outline">
          Violet, outline
        </Button1>
        <Button1 css={{borderRadius: 40}}>Override</Button1>
      </div>
      <div
        className={css({
          // Child selector
          '& > * + *': {
            marginLeft: theme.space(4)
          }
        })}
      >
        <Button2>Blue</Button2>
        <Button2 color="violet">Violet</Button2>
        <Button2 color="blue" appearance="outline">
          Blue, outline
        </Button2>
        <Button2 color="violet" appearance="outline">
          Violet, outline
        </Button2>
        <Button2 className={css({borderRadius: 40})}>Override</Button2>
      </div>
    </div>
  );
}
