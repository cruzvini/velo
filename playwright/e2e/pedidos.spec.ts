import { test, expect } from '@playwright/test';

// AAA - Arrange, Act, Assert

test('Deve consultar um pedido aprovado', async ({ page }) => {
    //Arrange
    await page.goto('http://localhost:5173/');
    await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

    await page.getByRole('link', { name: 'Consultar Pedido' }).click();
    await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

    //Act

    await page.getByTestId('search-order-id').fill('VLO-MK9WIA');
    await page.getByRole('button', { name: 'Buscar Pedido' }).click();

    //Assert
    await expect(page.getByText('VLO-MK9WIA')).toBeVisible();
    //await expect(page.getByTestId('order-result-id')).toBeVisible({timeout: 10_000});
    //await expect(page.getByTestId('order-result-id')).toContainText('VLO-MK9WIA');

    await expect(page.getByText('APROVADO')).toBeVisible();
    // await expect(page.getByTestId('order-result-status')).toBeVisible();
    // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});