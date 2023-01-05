import { newE2EPage } from '@stencil/core/testing';

describe('sharing-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sharing-btn></sharing-btn>');
    const element = await page.find('sharing-btn');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the url and description', async () => {
    const page = await newE2EPage();

    await page.setContent('<sharing-btn></sharing-btn>');
    const component = await page.find('sharing-btn');
    const element = await page.find('sharing-btn >>> div');
    expect(element.textContent).toMatchSnapshot();

    component.setProperty('url', 'https://stenciljs.com');
    await page.waitForChanges();
    expect(element.textContent).toMatchSnapshot();

    component.setProperty('description', "Hello, World! I'm James Quincy");
    await page.waitForChanges();
    expect(element.textContent).toMatchSnapshot();
  });
});
