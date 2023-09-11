import { render, screen } from '@testing-library/angular';
import { ChildComponent } from './child.component';
import userEvent from '@testing-library/user-event';
import { Mock, provideMock } from '@testing-library/angular/jest-utils';
import { HttpService } from './http.service';
import { TestBed } from '@angular/core/testing';

describe('ChildComponent', () => {
  describe('When typing nothing and clicking on Validate', () => {
    test('Then show "Title is required" error message and no http request has been sent', async () => {

      const user = userEvent.setup();

      const component = await render(ChildComponent, {
        componentProviders: [provideMock(HttpService)],
      });

      const input = component.getByRole("textbox");

      await user.clear(input);

      const button = component.getByRole("button");

      await user.click(button);

      const error = component.getByText("Title is required !!!")

      expect(error).toBeInTheDocument();

      const httpService = TestBed.inject<HttpService>(HttpService) as Mock<HttpService>;

      expect(httpService.sendTitle).not.toHaveBeenCalled(); //toHaveBeenCalledTimes(0)
    });
  });

  describe('When typing "Good" and clicking on Validate', () => {
    test('Then show "Title is Good" message, no error message and send a http request to the backend', async () => {

      const component = await render(ChildComponent, {
        componentProviders: [provideMock(HttpService)],
      });

      const user = userEvent.setup();

      const input = component.getByRole("textbox");

      await user.clear(input);

      await user.type(input, "Good");

      const button = component.getByRole("button");

      await user.click(button);

      const error = component.queryByText("Title is required !!!");

      expect(error).toBe(null);

      const httpService = TestBed.inject<HttpService>(HttpService) as Mock<HttpService>;

      expect(httpService.sendTitle).toHaveBeenCalledTimes(1);
    });
  });
});

/*

  // I started from here and then looked into mocking the HttpService.

  test('Then show "Title is required" error message and no http request has been sent', async () => {

      const user = userEvent.setup();

      await render(ChildComponent);

      const input = screen.getByRole("textbox");

      await user.clear(input);

      const button = screen.getByRole("button");

      await user.click(button);

      const error = screen.getByText("Title is required !!!")

      expect(error).toBeInTheDocument();
    });
*/

/*

// Mirroring technique from blog article

async function renderComponent() {
  const httpService: Mock<HttpService> = createMock(HttpService);

  const { container } = await render(ChildComponent, {
    imports: [
      InputComponent,
      ResultComponent,
      ButtonComponent,
      ErrorComponent
    ],
    componentProviders: [
      {
        provide: HttpService,
        useValue: httpService,
      },
    ],
  });

  return { container, httpService };
}
*/
