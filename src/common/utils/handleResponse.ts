import { AppResponse } from "../../types/interfaces";
import {
  PeopleNotFoundError,
  ProductNotFoundError,
} from "../errors/BusinessError";

export function handleControllerAction<T>(action: () => T): AppResponse<T> {
  try {
    const result = action();
    return {
      success: true,
      data: result,
      message: "Operação realizada com sucesso.",
    };
  } catch (error: unknown) {
    if (
      error instanceof ProductNotFoundError ||
      error instanceof PeopleNotFoundError
    ) {
      return {
        success: false,
        data: null,
        message: error.message,
      };
    }

    if (error instanceof Error) {
      return { success: false, data: null, message: error.message };
    }

    return {
      success: false,
      data: null,
      message: "Ocorreu um erro inesperado no sistema.",
    };
  }
}
