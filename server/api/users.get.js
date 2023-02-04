export default defineEventHandler(async (event) => {
  const url =
    "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6";

  try {
    const apiResponse = await $fetch(url, {
      method: "GET",
    });

    debugger;

    return apiResponse;
  } catch (error) {
    console.log(error);

    sendError(
      event,
      createError(
        error.statusCode === 400
          ? {
              statusCode: 400,
              statusMessage: "Bad request",
              message: error.message || "Invalid data has been provided.",
            }
          : {
              statusCode: 503,
              statusMessage: "Service unavailable.",
              message:
                "Service is temporary unavailable, please try again later.",
            }
      )
    );
  }
});
